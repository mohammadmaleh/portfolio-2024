"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import styled from "@emotion/styled";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
const SliderImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const ModalHeader = styled.p`
  font-size: 28px;
  font-weight: bolder;
  margin-bottom: 16px;
  color: #61dbfb;
`;
const ModalSecondaryText = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: #61dbfb;
  &:last-of-type {
    margin-top: 50px;
  }
`;
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { isMobile } from "../../config";
import { portfolioItems, SectionId } from "../../data/data";
import { PortfolioItem } from "../../data/dataDef";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Section from "../Layout/Section";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  height: 200px;
  margin-top: 30px;
`;
const SliderIframe = styled.iframe`
  align-items: center;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my work
        </h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="pb-6 min-h-[300px] " key={`${title}-${index}`}>
                <div
                  className={classNames(
                    "relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"
                  )}
                >
                  <ProjectImage alt={title} placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
  ({
    item: {
      longDescription,
      title,
      description,
      keyFeatures,
      sliderImages,
      sliderVideos,
      stackUsed,
    },
  }) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
      // Avoid hydration styling errors by setting mobile in useEffect
      if (isMobile) {
        setMobile(true);
      }
    }, []);

    const renderStackUsedInTheProject = () => {
      return stackUsed?.map((stack, index) => (
        <li
          key={`${stack}-${index}`}
          className="text-sm text-white opacity-100 sm:text-base
          mb-5 last:mb-0 bold"
        >
          {stack}
        </li>
      ));
    };
    const style = {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "90%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      backgroundColor: "#000",
      boxShadow: 24,
      p: 4,
    };

    useDetectOutsideClick(linkRef, () => setShowOverlay(false));

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        setOpenModal(!openModal);

        if (mobile && !showOverlay) {
          event.preventDefault();
          setShowOverlay(!showOverlay);
        }
      },
      [mobile, showOverlay]
    );
    const handleModalClose = () => {
      setOpenModal(false);
    };

    const renderKeyFeatures = () => {
      return keyFeatures?.map(({ featureTitle, featureDescription }, index) => (
        <li
          key={`${featureTitle}-${index}`}
          className="text-sm text-white opacity-100 sm:text-base
          mb-5 last:mb-0"
        >
          <p className="font-bold ">{featureTitle}: </p> {featureDescription}
        </li>
      ));
    };
    return (
      <>
        <a
          className={classNames(
            "absolute inset-0 h-400 w-full  bg-gray-900 transition-all duration-300 hover:cursor-pointer",
            { "opacity-0 hover:opacity-80": !mobile },
            showOverlay ? "opacity-80" : "opacity-0"
          )}
          onClick={handleItemClick}
          ref={linkRef}
          target="_blank"
        >
          <div className="relative h-full w-full p-4">
            <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
              <h2 className="text-center font-bold text-white opacity-100">
                {title}
              </h2>
              <p className="text-xs text-white opacity-100 sm:text-sm">
                {description}
              </p>
            </div>
            <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
          </div>
        </a>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
          onClose={handleModalClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openModal}>
            <Box sx={style} className="overflow-y-auto">
              <ModalHeader id="transition-modal-title">{title}</ModalHeader>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                visibleSlides={1}
                className="w-full"
                isIntrinsicHeight
                interval={3000}
                dragEnabled
                touchEnabled
                infinite
              >
                <Slider>
                  {sliderImages &&
                    sliderImages.length > 0 &&
                    sliderImages.map((image, index) => (
                      <Slide index={1} key={index} className="w-full">
                        <SliderImage
                          alt={title}
                          placeholder="blur"
                          src={image}
                        />
                      </Slide>
                    ))}

                  {sliderVideos &&
                    sliderVideos.length > 0 &&
                    sliderVideos.map((video, index) => (
                      <Slide index={1} key={index}>
                        <SliderIframe
                          width="100%"
                          height="700"
                          src={video}
                        ></SliderIframe>
                      </Slide>
                    ))}
                </Slider>
                <ControlContainer>
                  <ButtonBack>
                    <ArrowBackIos />
                  </ButtonBack>
                  <p> Scroll down form more details</p>
                  <ButtonNext>
                    <ArrowForwardIos />
                  </ButtonNext>
                </ControlContainer>
              </CarouselProvider>
              <ModalSecondaryText className="mt-20">
                Description:
              </ModalSecondaryText>
              <p id="transition-modal-description">{longDescription}</p>
              <ModalSecondaryText>Key Features:</ModalSecondaryText>

              <ul className="list-disc">{renderKeyFeatures()}</ul>
              <ModalSecondaryText>
                Stack used in the project:
              </ModalSecondaryText>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {renderStackUsedInTheProject()}
              </ul>
            </Box>
          </Fade>
        </Modal>
      </>
    );
  }
);

ItemOverlay.displayName = "ItemOverlay";

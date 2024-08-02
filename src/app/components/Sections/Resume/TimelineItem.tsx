import { FC, memo } from "react";

import { TimelineItem as TimelineItemType } from "../../../data/dataDef";
import { Typography } from "@mui/material";

const TimelineItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
  const { title, date, location, content } = item;
  const renderContent = (
    content: TimelineItemType["content"]
  ): React.ReactElement[] => {
    return content.map((listItem) => {
      return (
        <li key={listItem}>
          <p className="whitespace-pre-wrap">{listItem}</p>
        </li>
      );
    });
  };
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">
            {location}
          </span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <article className="text-nowrap">
        <ul className="list-disc">{content && renderContent(content)}</ul>
      </article>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;

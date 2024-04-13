import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  // const intro = data.properties.Intro.rich_text[0].plain_text;
  const description = data.properties.Detail.rich_text[0].plain_text;
  // const No = data.properties.No.rich_text[0].plain_text;
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url;
  const tags = data.properties.TechnologyStack.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  // const url = data.properties.URL.url;
  // const planUrl = data.properties.PlanURL.rich_text[0].text.link.url;

  // console.log(imgSrc);
  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      {data.cover !== null ? (
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="cover image"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      ) : (
        ""
      )}

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-md">{description}</h3>
        {/* {url !== "-" ? (
          <div className="my-2">
            <a
              style={{ color: "gray" }}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              서비스 URL
            </a>
          </div>
        ) : (
          ""
        )} */}

        {/* <a href={planUrl}>유튜브 시연영상 보러가기</a> */}
        <p className="my-1 font-bold text-base">
          근무기간 : {start}~{end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2 overflow-hidden">
          {tags.map((aTag) => (
            // <h1
            //   className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            //   key={aTag.id}
            // >
            <h1
              className="text-xs px-2 py-1 mr-2 rounded-xl bg-green-100 text-green-700 dark:bg-slate-500 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

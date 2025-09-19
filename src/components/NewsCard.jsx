
// import React from "react";
// import { Link } from "react-router-dom";

// const NewsCard = ({ article }) => {
//   const { source, author, title, description, url, urlToImage, publishedAt } =
//     article;

//   return (
//     <div
//       className="
//         group
//         max-w-md mx-auto
//         bg-neutral-900
//         rounded-2xl overflow-hidden
//         shadow-lg shadow-black/40
//         hover:shadow-2xl hover:shadow-black/60
//         transition-all duration-300
//         hover:scale-[1.03] hover:translate-y-[-2px]
//       "
//     >
//       {/* Image with gradient overlay */}
//       <div className="relative overflow-hidden h-52">
//         <img
//           src={urlToImage}
//           alt={title}
//           className="
//             absolute inset-0 w-full h-full object-cover
//             transform group-hover:scale-105 transition-transform duration-300
//           "
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="p-4 sm:p-6">
//         {/* Title */}
//         <Link to={url}>
//           <h2
//             className="
//               text-lg sm:text-xl font-bold leading-snug
//               text-gray-100
//               group-hover:text-emerald-400
//               transition-colors duration-200
//             "
//           >
//             {title}
//           </h2>
//         </Link>

//         {/* Description */}
//         <p className="mt-3 text-sm leading-relaxed text-gray-400">
//           {description?.length > 100
//             ? description.slice(0, 100) + "..."
//             : description}
//         </p>

//         {/* Author & Date */}
//         <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
//           <span className="italic text-gray-400">By {author || "Unknown"}</span>
//           <span className="text-xs text-gray-500">
//             {new Date(publishedAt).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Source Badge */}
//         <div
//           className="
//             mt-3 inline-block
//             px-3 py-1 rounded-full
//             text-xs font-semibold uppercase tracking-wide
//             bg-emerald-500/10 text-emerald-400
//             transition-colors duration-200
//             hover:bg-emerald-500/20
//           "
//         >
//           Source: {source.name}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;

  return (
    <div
      className="
        group
        max-w-md mx-auto
        bg-white dark:bg-neutral-900
        rounded-2xl overflow-hidden
        shadow-lg shadow-black/40
        hover:shadow-2xl hover:shadow-black/60
        transition-all duration-300
        hover:scale-[1.03] hover:translate-y-[-2px]
      "
    >
      {/* Image with gradient overlay */}
      <div className="relative overflow-hidden h-52">
        <img
          src={urlToImage}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover
            transform group-hover:scale-105 transition-transform duration-300
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <Link to={url}>
          <h2
            className="
              text-lg sm:text-xl font-bold leading-snug
              text-gray-900 dark:text-gray-100
              group-hover:text-emerald-600 dark:group-hover:text-emerald-400
              transition-colors duration-200
            "
          >
            {title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        {/* Author & Date */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="italic">By {author || "Unknown"}</span>
          <span className="text-xs">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>

        {/* Source Badge */}
        <div
          className="
            mt-3 inline-block
            px-3 py-1 rounded-full
            text-xs font-semibold uppercase tracking-wide
            bg-emerald-100 text-emerald-700
            dark:bg-emerald-500/10 dark:text-emerald-400
            transition-colors duration-200
          "
        >
          Source: {source.name}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


export const FancyChevronIcon: IconComponent = ({
  customTwClass = "",
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="34"
      fill="none"
      viewBox="0 0 60 34"
      className={customTwClass}
      style={style}
    >
      <path
        fill="#fff"
        d="M31.634 33.202L59.132 4.958a2.399 2.399 0 00-.056-3.328 2.248 2.248 0 00-3.184 0l-5.816 5.974c-10.992 11.29-29.132 11.29-40.124 0L4.136 1.63a2.249 2.249 0 00-3.24 0 2.399 2.399 0 000 3.328l27.498 28.244a2.249 2.249 0 003.24 0z"
      ></path>
    </svg>
  );
};

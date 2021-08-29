export const DiscordIcon: IconComponent = ({
  customTwClass = "",
  style,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      fill="none"
      viewBox="0 0 79 79"
      {...props}
      style={style}
    >
      <g fill="#192854" clipPath="url(#clip0)">
        <path d="M74.506 35.107c-2.382-7.579-3.912-11.088-4.613-12.505-.564-1.161-1.992-3.658-2.048-3.758-.2-.244-5.159-6.177-17.109-10.566l-1.579 4.3c5.65 2.075 9.518 4.47 11.914 6.273-6.617-1.974-14.486-3.181-21.455-3.181-6.977 0-14.855 1.21-21.478 3.188 2.218-1.645 6.252-4.193 11.937-6.28l-1.58-4.3C16.546 12.667 11.587 18.6 11.387 18.844c0 0-1.178 1.902-2.167 3.99-.593 1.25-2.13 4.108-4.51 12.323C1.727 45.462.667 60.028.626 60.61c.526 1.152 6.633 10.872 23.067 10.872l4.503-6.52a45.466 45.466 0 0011.421 1.451c3.879 0 7.721-.49 11.445-1.458l4.475 6.527c16.76 0 22.231-9.389 23.089-10.898-.067-.694-1.727-17.866-4.119-25.478zm-4.386 27.76c-3.486 2.468-7.581 3.814-12.188 4.01l-2.31-3.368a45.227 45.227 0 009.116-4.676L62.2 55.02a40.597 40.597 0 01-10.285 4.926v.005s-5.996 1.883-12.299 1.883c-6.302 0-12.281-1.878-12.281-1.878v-.004a40.597 40.597 0 01-10.302-4.932l-2.538 3.813a45.216 45.216 0 009.133 4.682l-2.323 3.363c-4.608-.196-8.705-1.543-12.193-4.01-1.944-1.377-3.196-2.772-3.798-3.523.265-3.137 1.352-14.477 3.796-22.914 1.835-6.332 3.101-9.295 3.792-10.726 0 0 17.727-5.455 26.714-5.455 8.98 0 19.937 2.23 26.654 5.427.727 1.654 2.02 4.925 3.867 10.803 1.95 6.202 3.403 19.382 3.766 22.885-.611.76-1.858 2.14-3.783 3.503z"></path>
        <path d="M24.447 39.505h4.58v7.633h-4.58v-7.633zM50.205 39.505h4.58v7.633h-4.58v-7.633z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#192854"
            d="M0 0H78V78H0z"
            transform="translate(.625 .88)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
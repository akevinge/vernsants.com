type IconProps = {
  customTwClass?: string;
  style?: import("react").CSSProperties;
};

type IconComponent = import("react").FC<IconProps>;

enum Routes {
  home = "/",
  shop = "/shop",
  shippingAndDoa = "/shipping-and-doa",
}

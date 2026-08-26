import { GooglePlayButton } from "mind-clear-site";

/**
 * The official "Get it on Google Play" badge, used unaltered per Google's
 * badge guidelines. Android is the only store link — never invent an App Store
 * badge; iOS isn't available.
 */
export const Default = () => <GooglePlayButton />;

/** Height is the only styling knob; width scales to keep the badge ratio. */
export const Heights = () => (
  <div className="flex items-center gap-6">
    <GooglePlayButton height={40} />
    <GooglePlayButton height={56} />
    <GooglePlayButton height={72} />
  </div>
);

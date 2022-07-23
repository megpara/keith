import SecondaryButton from "./ButtonSecondary";

export default function Project({ project, images }) {
  var primaryImage = images.find((image) => {
    return image.primaryImage;
  });
  return (
    <div className="relative aspect-square">
      <img
        src={primaryImage.url}
        className="brightness-75 w-full h-full object-cover"
      />
      <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
        <SecondaryButton>
          <div>{project}</div>
        </SecondaryButton>
      </div>
    </div>
  );
}

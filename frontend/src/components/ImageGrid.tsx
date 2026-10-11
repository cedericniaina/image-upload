interface Props {
  image: File[];
}

export default function ImageGrid({ image }: Props) {
  return (
    <div className="grid grid-cols-3 gap-5 sm:w-screen p-5">
      {image &&
        image.length > 0 &&
        image.map((item, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(item)}
              alt={item.name}
              className="border-2 border-border rounded-lg "
              loading="lazy"
            ></img>
            <div> {item.name}</div>
          </div>
        ))}
    </div>
  );
}

const noImageUrl =
  "https://images.unsplash.com/photo-1583162558971-6c686a2dc9f3?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const CountryPictrue = ({
  name,
  url,
}: {
  name: string;
  url?: string;
}) => {
  return (
    <div>
      <h2>{name}</h2>
      {/* po ?? wartość domyślna */}
      {/* pokaże wartość po ?? tylko kiedy url jest null lub undefined */}
      <img src={url ?? noImageUrl} height={150} />
    </div>
  );
};

function LinkWrapperCard({
  shortUrl,
  destinationUrl,
  numberOfClicks,
}: {
  shortUrl: string;
  destinationUrl: string;
  numberOfClicks: string;
}) {
  return (
    <div>
      {/* for card: put max height , max width, bg */}
      <div className="flex flex-row">
        <div>
          <div>{shortUrl}sjdfklsldkf.com</div>
          <div>{destinationUrl}sflsflsdjlfasjldf</div>
        </div>
        <div>{numberOfClicks}</div>
      </div>
    </div>
  );
}

export default LinkWrapperCard;

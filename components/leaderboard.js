function smallAddress(address) {
  const addBegin = address.substring(0, 6);
  const addEnd = address.substring(address.length - 4, address.length);
  return `${addBegin}...${addEnd}`;
}

function leaderBoard(data) {
  console.log(data);

  return (
    <div className="col-span-2 p-10 max-h-screen">
      <div>
        <img
          className="w-96"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/xhwcodrzvkpktyzwfjjw"
        ></img>
      </div>
      <div className="py-2 text-3xl font-semibold">🔝 Leaderboard</div>
      <div className="pt-6 pb-2 text-xl font-semibold text-gray-500">
        🤝 Outflow
      </div>

      {data.nodes
        .sort((a, b) => b.totalOutflowRate - a.totalOutflowRate)
        .map((node, index) => {
          if (node.totalOutflowRate > 0) {
            return (
              <div className="grid grid-cols-2 font-mono">
                <div className="text-gray-900 font-medium">
                  {node.name ? node.name : smallAddress(node.id)}
                </div>
                <div className="text-right text-gray-900 ">
                  {node.totalOutflowRate}
                </div>
              </div>
            );
          }
        })}
      <div className="pt-3 pb-2 text-xl font-semibold text-gray-500">
        👌 Inflow
      </div>
      {data.nodes
        .sort((a, b) => b.totalInflowRate - a.totalInflowRate)
        .map((node, index) => {
          if (node.totalInflowRate > 0)
            return (
              <div className="grid grid-cols-2 font-mono">
                <div className="text-gray-900 font-medium">
                  {node.name ? node.name : smallAddress(node.id)}
                </div>
                <div className="text-right text-gray-900 ">
                  {node.totalInflowRate.toFixed(0)}
                </div>
              </div>
            );
        })}
    </div>
  );
}

export default leaderBoard;

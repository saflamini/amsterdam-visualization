function smallAddress(address) {
  const addBegin = address.substring(0, 6);
  const addEnd = address.substring(address.length - 4, address.length);
  return `${addBegin}...${addEnd}`;
}

export const formatFlowRateToDaily = (flowRate) => {
  const numFlowRate = Number(flowRate) / 10 ** 18;
  return (numFlowRate * 60 * 60 * 24).toFixed(3) + "/day";
};

function leaderBoard(data) {
  return (
    <div>
      <img alt="sf-logo" className="w-96" src="superfluid-logo.jpg"></img>
    </div>
    // <div className="col-span-2 p-8 max-h-screen">
    //   {/* <div className="py-2 pt-6 text-3xl font-semibold text-white">
    //     🔝 Leaderboard
    //   </div>
    //   <div className="pt-6 pb-2 text-xl font-semibold text-white">
    //     🤝 Outflow
    //   </div>
    //   <div className="scrollable-container">
    //     {data.nodes
    //       .sort((a, b) => b.totalOutflowRate - a.totalOutflowRate)
    //       .map((node, index) => {
    //         if (node.totalOutflowRate > 0) {
    //           return (
    //             <div className="grid grid-cols-2 font-mono" key={node.id}>
    //               <div className="text-white font-medium">
    //                 {index + 1}. {node.name ? node.name : smallAddress(node.id)}
    //               </div>
    //               <div className="text-right text-white">
    //                 {formatFlowRateToDaily(node.totalOutflowRate)}
    //               </div>
    //             </div>
    //           );
    //         }
    //       })
    //       .slice(0, 10)}
    //   </div>

    //   <div className="rules-container font-semibold text-white">
    //     <p className="text-xl">Rules of the Game</p>
    //     <p className="text-xs text-gray-400">Scroll for more rules</p>
    //     <ol className="list-decimal">
    //       <li className="text-sm pt-3">
    //         1. Get some BuffiGwei Super Tokens (BGTx) by joining our workshop or
    //         wrap your BuffiGwei Tokens (BGT) in the Superfluid Dashboard on
    //         Arbitrum Rinkeby.
    //       </li>
    //       <li className="text-sm pt-3">
    //         2. Send and receive streams of BGTx to people at ETHDenver to build
    //         your streaming volume — just be careful you don&apos;t hit zero
    //         balance of BGTx or your streams will stop!
    //       </li>
    //       <li className="text-sm pt-3">
    //         3. Throughout the duration of ETHDenver, aim for the highest BGTx
    //         outflow rate by Sunday, February 20th at 12pm MST. The 10 players
    //         with the highest streaming volumes will receive an edition of the
    //         NFT!
    //       </li>
    //       <li className="text-sm pt-3">
    //         4. Make sure to stop by our booth on the 3rd level of the Web3
    //         Castle and share proof of your stream to receive a Stream It Forward
    //         POAP!
    //       </li>
    //     </ol>
    //   </div> */}
    // </div>
  );
}

export default leaderBoard;

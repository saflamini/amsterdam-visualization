import namedAddress from "./namedAdd";

function ConstructNodeAndLinkData(data) {
  var nodes = [];
  var links = [];
  let mutableAccountTokenSnapshots = [...data.accountTokenSnapshots];

  const topTenOutflowAcountIds = mutableAccountTokenSnapshots
    .sort((a, b) =>
      Number(a.totalOutflowRate) > Number(b.totalOutflowRate) ? -1 : 1
    )
    .map(x => x.account.id)
    .slice(0, 10);
  data.accountTokenSnapshots.forEach(({ account, totalOutflowRate }) => {
    var node = {
      id: account.id,
      name: namedAddress[account.id],
      nodeRelSize: Math.log(totalOutflowRate), // dividing to make it smaller
      color: topTenOutflowAcountIds.includes(account.id)
        ? "rgb(255, 255, 255)"
        : "rgb(86, 184, 73)",
      totalOutflowRate: totalOutflowRate,
      totalInflowRate: 0,
    };
    nodes.push(node);
    account.outflows.forEach(({ receiver }) => {
      // if node present in nodes, fetch it, else create a new node
      var nodeIndex = nodes.findIndex((n) => n.id === receiver.id);
      if (nodeIndex === -1) {
        nodes.push({
          id: receiver.id,
          name: namedAddress[receiver.id],
          nodeRelSize: 6.9,
          color: "rgb(86, 184, 73)",
          totalOutflowRate: 0,
          totalInflowRate: totalOutflowRate / account.outflows.length,
        });
      } else {
        nodes[nodeIndex].totalInflowRate +=
          totalOutflowRate / account.outflows.length;
      }
      var link = {
        source: account.id,
        target: receiver.id,
        curvature: 0,
        rotation: 0,
      };
      links.push(link);
    });
  });
  return { nodes, links };
}

export default ConstructNodeAndLinkData;

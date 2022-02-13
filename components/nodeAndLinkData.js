import namedAddress from "./namedAdd";

const Color = ['red', 'orange', 'yellow', 'green', 'pink', 'white', 'cyan', 'Magenta', 'goldenrod', 'darkorange', 'darkcyan', 'darkmagenta', 'darkgoldenrod'];

function ConstructNodeAndLinkData(data) {
  var nodes = [];
  var links = [];
  data.accountTokenSnapshots.forEach(({ account, totalOutflowRate}) => {
    var node = { 
      id: account.id,
      name: namedAddress[account.id],
      nodeRelSize: totalOutflowRate/100000000000, // dividing to make it smaller
      color: Color[Math.floor(Math.random() * Color.length)],
      totalOutflowRate: totalOutflowRate,
      totalInflowRate: 0,
    };
    nodes.push(node);
    account.outflows.forEach(({ receiver }) => {
      // if node present in nodes, fetch it, else create a new node
      var nodeIndex = nodes.findIndex(n => n.id === receiver.id);
      if (nodeIndex === -1) {
        nodes.push({ 
          id: receiver.id,
          name: namedAddress[receiver.id],
          nodeRelSize: 1,
          color: Color[Math.floor(Math.random() * Color.length)],
          totalOutflowRate: 0,
          totalInflowRate: totalOutflowRate/account.outflows.length,
        });
      } else {
        nodes[nodeIndex].totalInflowRate += totalOutflowRate/account.outflows.length;
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


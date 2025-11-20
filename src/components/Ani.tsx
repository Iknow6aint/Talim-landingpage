export default function BranchingDiagram() {
  const nodes = [
    { text: 'Secure', x: 50, y: 240, rotation: -15 },
    { text: 'Trusted', x: 170, y: 280, rotation: 0 },
    { text: 'Reliable', x: 200, y: 220, rotation: -15 },
    { text: 'Accessible', x: 260, y: 155, rotation: 10 },
    { text: 'Flexible', x: 370, y: 185, rotation: -25 },
    { text: 'Fast', x: 480, y: 215, rotation: -5 },
    { text: 'Private', x: 450, y: 285, rotation: 0 },
    { text: 'Global', x: 615, y: 165, rotation: -10 },
    { text: 'Optimized', x: 770, y: 190, rotation: -8 },
    { text: 'Efficient', x: 770, y: 285, rotation: 0 },
    { text: 'Versatile', x: 930, y: 180, rotation: -12 },
    { text: 'Connected', x: 1080, y: 120, rotation: -8 },
    { text: 'Comprehensive', x: 1130, y: 210, rotation: -15 },
    { text: 'Stable', x: 1100, y: 285, rotation: 0 }
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [5, 6], [5, 7], [7, 8], [8, 9], [8, 10],
    [10, 11], [10, 12], [10, 13]
  ];

  return (
    <div className="w-full bg-white flex items-center justify-center overflow-hidden ">
      <svg className="w-full h-full" viewBox="0 0 1350 400">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Draw connection circles between nodes */}
        {connections.map(([start, end], idx) => {
          const startNode = nodes[start];
          const endNode = nodes[end];
          
          // Calculate bottom-right of start node
          const startAngle = (startNode.rotation * Math.PI) / 180;
          const startXOffset = Math.cos(startAngle) * 60 - Math.sin(startAngle) * 20;
          const startYOffset = Math.sin(startAngle) * 60 + Math.cos(startAngle) * 20;
          
          // Calculate top-left of end node  
          const endAngle = (endNode.rotation * Math.PI) / 180;
          const endXOffset = Math.cos(endAngle) * (-60) - Math.sin(endAngle) * (-20);
          const endYOffset = Math.sin(endAngle) * (-60) + Math.cos(endAngle) * (-20);
          
          // Adjust ball position - move up by reducing y
          let circleX = (startNode.x + 60 + startXOffset + endNode.x + 60 + endXOffset) / 2;
          let circleY = (startNode.y + 20 + startYOffset + endNode.y + 20 + endYOffset) / 2 - 5;
          
          // Special adjustment for Reliable to Accessible connection (index 2)
          if (idx === 2) {
            circleY += 15;
          }
          
          // Special adjustment for Accessible to Flexible connection (index 3)
          if (idx === 3) {
            circleX += 20;
          }
          
          return (
            <circle
              key={`circle-${idx}`}
              cx={circleX}
              cy={circleY}
              r="10"
              fill="#00355f"
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node, idx) => (
          <g key={idx} transform={`rotate(${node.rotation} ${node.x + 60} ${node.y + 20})`}>
            <rect
              x={node.x}
              y={node.y}
              width="120"
              height="40"
              rx="12"
              ry="12"
              fill="#00355f"
              filter="url(#shadow)"
            />
            
            <text
              x={node.x + 60}
              y={node.y + 26}
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontWeight="500"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {node.text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
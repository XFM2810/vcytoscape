export default {
  style: [{
    selector: 'node',
    style: {
      shape: 'round-rectangle'
    }
  }, {
    selector: 'node:parent',
    style: {
      'background-opacity': 0,
      'border-width': 0
    }
  }, {
    selector: 'edge',
    style: {
      width: 1,
      'curve-style': 'bezier',
      'target-arrow-shape': 'vee'
    }
  }, {
    selector: 'node[label]',
    style: {
      label: 'data(label)',
      'font-size': '9px',
      color: '#666',
      'z-index': 2
    }
  }, {
    selector: 'edge[label]',
    style: { 'font-size': '9px', color: '#626867', 'z-index': 1 }
  }],
  layout: {
    name: 'cose',
    animate: true
  }
}

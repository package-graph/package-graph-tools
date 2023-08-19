import process from 'node:process'

describe('build graph', () => {
  it('check graph generation', () => {
    expect(buildGraph(`${process.cwd()}/test/fixtures/graph`, 0)).toEqual({
      NodeList: [
        {
          depth: 0,
          name: 'fbjs',
          nodeId: 'fbjs',
          version: '0.0.2',
        },
        {
          depth: 0,
          name: 'react',
          nodeId: 'react',
          version: '15.3.1',
        },
        {
          depth: 1,
          name: 'react-dom',
          nodeId: 'react-dom',
          version: '0.13.0',
        },
        {
          depth: 1,
          name: 'react-test-renderer',
          nodeId: 'react-test-renderer',
          version: '0.13.2',
        },
      ],
      EdgeList: [
        {
          edgeId: 'fbjs-0.0.2-react',
          source: {
            name: 'fbjs',
            nodeId: 'fbjs',
            version: '0.0.2',
            depth: 0,
          },
          target: {
            name: 'react',
            nodeId: 'react',
            version: '15.3.1',
            depth: 1,
          },
        },
        {
          edgeId: 'fbjs-0.0.2-react-dom',
          source: {
            name: 'fbjs',
            nodeId: 'fbjs',
            version: '0.0.2',
            depth: 0,
          },
          target: {
            name: 'react-dom',
            nodeId: 'react-dom',
            version: '0.13.0',
            depth: 1,
          },
        },
        {
          edgeId: 'fbjs-0.0.2-react-test-renderer',
          source: {
            name: 'fbjs',
            nodeId: 'fbjs',
            version: '0.0.2',
            depth: 0,
          },
          target: {
            name: 'react-test-renderer',
            nodeId: 'react-test-renderer',
            version: '0.13.2',
            depth: 1,
          },
        },
      ],
    })
  })
})

describe('build dev graph', () => {
  test('should build dev graph', () => {
    const buildDepGraph = (name: string) => {
      graphBuild(name, 1)
    }
    const list = Object.keys(NodeMap).map((key) => {
      return {
        name: NodeMap[key],
        version: '1.0.0',
      }
    })
    expect(list).toEqual([
      {
        name: '@sentry/browser',
        version: '4.19.1',
      },
      {
        name: 'axios',
        version: '0.18.0',
      },
    ])
    buildDepGraph('@sentry/browser')
    expect(list).toEqual([
      {
        name: '@sentry/browser',
        version: '4.19.1',
      },
      {
        name: 'axios',
        version: '0.18.0',
      },
      {
        name: '@sentry/browser@^4.19.1',
        version: '4.19.1',
      },
      {
        name: '@sentry/browser@^0.18.0',
        version: '0.18.0',
      },
      {
        name: 'axios@^0.18.0',
        version: '0.18.0',
      },
    ])
  })
})

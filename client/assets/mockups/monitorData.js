// mockup data
const monitorData = [
  {
    status: 'OK',
    pod: 'POST_1',
    containers: 'post',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.2',
    volume: 'VOL_1',
  },
  {
    status: 'ERROR',
    pod: 'POST_2',
    containers: 'post',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.2',
    volume: 'VOL_1',
  },
  {
    status: 'OK',
    pod: 'POST_3',
    containers: 'post',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.3',
    volume: 'VOL_1',
  },
  {
    status: 'OK',
    pod: 'COMMENT_1',
    containers: 'comment',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.3',
    volume: 'VOL_2',
  },
  {
    status: 'OK',
    pod: 'COMMENT_2',
    containers: 'comment',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.4',
    volume: 'VOL_2',
  },
  {
    status: 'ERROR',
    pod: 'QUERY_1',
    containers: 'query',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.4',
    volume: 'VOL_3',
  },
  {
    status: 'OK',
    pod: 'QUERY_2',
    containers: 'query',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.5',
    volume: 'VOL_3',
  },
  {
    status: 'OK',
    pod: 'MODERATION_1',
    containers: 'moderation',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.5',
    volume: 'VOL_4',
  },
];

export default monitorData;

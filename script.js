import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '30s', target: 20 },
      { duration: '10s', target: 20 },
    ],
    thresholds: {
        // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s.
        http_req_duration: ['p(90) < 4', 'p(95) < 800', 'p(99.9) < 2000'],
      },
  };

export default function () {
  http.get('https://test.k6.io');

  sleep(1);
}

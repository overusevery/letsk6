FROM grafana/k6
COPY ./script.js ./

ENTRYPOINT k6 run script.js --out json=test.json ; echo $? 
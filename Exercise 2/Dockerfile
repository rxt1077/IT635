FROM ubuntu:18.04
COPY sign_outs.zip /
COPY create /
RUN apt-get -y update \
 && apt-get install -y sqlite3 python3-pip zip xlsx2csv \
 && pip3 install xlsxwriter openpyxl

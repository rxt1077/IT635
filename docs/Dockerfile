FROM "ruby:3.2.0"
WORKDIR /docs
COPY Gemfile /docs/
RUN apt-get update
RUN apt-get -y install rsync default-jre graphviz
RUN bundle install 
CMD ruby -run -e httpd

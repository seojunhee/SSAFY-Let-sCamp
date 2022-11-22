FROM openjdk:11

# set arg
ARG WORKSPACE=/var/jenkins_home/jobs/letscamp/workspace/BE/letscamp/
ARG BUILD_TARGET=${WORKSPACE}/build/libs
WORKDIR ${WORKSPACE}

# copy code & build
COPY . .
RUN ./gradlew clean bootJar

WORKDIR ${BUILD_TARGET}
RUN jar -xf *.jar

EXPOSE 8080
ENTRYPOINT ["java","org.springframework.boot.loader.JarLauncher"]


FROM python:3.10.6
RUN pip install --upgrade pip
WORKDIR /var/jenkins_home/jobs/letscamp/workspace/core/core/
COPY . .
WORKDIR ../core
RUN pip3 install -r requirements.txt
CMD ["python", "manage.py", "runserver", "--noreload", "0.0.0.0:8000"]
EXPOSE 8000
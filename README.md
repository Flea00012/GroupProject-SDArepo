# Eduverse

An online tool for educational purposes that supports the learning process of students who are studying through distance-learning courses.


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![made-with-java 14](https://img.shields.io/badge/Made%20with-Java-1f425f.svg)](https://www.java.com/en/)
[![made-with-reactjs](https://img.shields.io/badge/Made%20with-reactjs-1f425f.svg)](https://reactjs.org/)

## Brief Summary


![alt text](https://github.com/Flea00012/GroupProject-SDArepo/blob/master/homepage.png)

The platform is used by educators to support the learning process of their students with online education. The platform offers teachers features for creating assignments, courses, videos and also allows the teacher to track the Sentiment of the students. The platform offers the opportunity for students to pose questions to their fellow students and to the teachers. This communication is supported for persisted chat and for non-persisted chat (this is called the chatroom environment). 

The target customer is the teacher who is faced with the challenge of teaching students via online platforms, in the context of the Covid19 epidemic and in other difficult situations. The platform is focused on supporting the student audience in the range from 10 to 14 years of age. The platform is designed to support any device that can access the internet, from small screen smart phones to desktop PC.

## Usage

The usage of the site requires membership and therefore registration for the teachers and the students. The user will start by entering a unique email, with name and password. This registration is done on the Landing Page as shown below.


![alt text](https://github.com/Flea00012/GroupProject-SDArepo/blob/master/landingpage.png)


## Local Installation

To run the application locally, the user will need to clone the repo and install support for nodeJS (v 14.9) and Java (v 11). This application was developed in VSCode and IntelliJ Ultimate (with Spring). It is recommneded that the user builds the project using the gradle.build file, to ensure all dependancies are installed correctly. Note also that the database for the project is run using Postgres inside a docker-compose file, which can be found in the repository. 

Once the gradle build is completed, the user can run the Java Spring MVC project from the SkeletonApplication.java file (see code insert).


```java

	public static void main(String[] args) {
		SpringApplication.run(SkeletonApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
					.addMapping("/**")
					.allowedOrigins("*")
					.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
			}
		};
	}
```

In order to run the front-end (the reactJS application), navigate into the directory "frontend" and ```bash npm install ``` to obtain all the required dependancies.

The chatroom can is developed in NodeJS and uses websockets for communication between user and the server. The files can be found in the directory "backend".

## List of Dependencies

### front-end
- axios: "^0.21.0"
- brain.js: "^1.6.1"
- events: "^3.2.0"
- moment: "^2.29.1"
- natural: "^0.6.3"
- prop-types: "^15.7.2"
- react: "^17.0.1"
- react-big-calendar: "^0.30.0"
- react-bootstrap: "^1.4.0"
- react-datepicker: "^3.3.0"
- react-dom: "^17.0.1"
- react-icons: "^4.1.0"
- react-router-dom: "^5.2.0"
- react-scripts: "4.0.0"
- react-test-renderer: "^17.0.1"
- recharts: "^1.8.5"
- web-vitals: "^0.2.4"
- ws: "^7.4.0"
- @fortawesome: "^1.0.9"
- @material-ui/core": "^4.11.1"
- @material-ui/icons": "^4.9.1"

### Spring-Java
- 'org.springframework.boot:spring-boot-starter-data-jpa'
- 'org.springframework.boot:spring-boot-starter-security'
- 'org.springframework.boot:spring-boot-starter-thymeleaf'
- 'org.springframework.boot:spring-boot-starter-web'
- 'org.springframework.boot:spring-boot-devtools'
- 'com.auth0', name: 'java-jwt', version: '3.8.3'
- 'org.springframework.boot', name: 'spring-boot-starter-test', version: '2.4.1'

### back-end
- ws: "^7.4.0"

## Features

- chat room
- sentiment analysis using NLP from the Brain.JS library
- course creation
- assignment creation and completion
- grading of students


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT license applied to this project. Please view the link for further details.

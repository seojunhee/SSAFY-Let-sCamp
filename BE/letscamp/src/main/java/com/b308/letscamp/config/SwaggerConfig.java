package com.b308.letscamp.config;

import io.swagger.annotations.ApiParam;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Let's Camp API Info")
                .description("Let's Camp API")
                .build();
    }

    @Bean
    public Docket restAPI(){
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("B308")
                .apiInfo(this.apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any()) // 대상 패키지
                .paths(PathSelectors.any()) // 어떤 식으로 시작하는 api를 보여줄 것인지
                .build();
    }
}

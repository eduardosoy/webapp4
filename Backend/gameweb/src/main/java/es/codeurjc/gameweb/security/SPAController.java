package es.codeurjc.gameweb.security;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SPAController {
    @GetMapping({ "/api/**/{path:[^\\.]*}", "/{path:api[^\\.]*}" })
    public String redirect() {
        return "forward:/api/index.html";
    }
}

package lee.projects.music.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.IM_USED)
public class IdExistsException extends RuntimeException {
    public IdExistsException(String message) {
        super(message);
    }
}

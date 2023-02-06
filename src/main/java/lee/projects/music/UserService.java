package lee.projects.music;

import lee.projects.music.exceptions.IdExistsException;
import lee.projects.music.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public boolean idExists(Long id) {
        return userRepository.existsById(id);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public User findUserById(Long id) {
        return userRepository.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by ID " + id + " not found"));
    }

    public void deleteUser(Long id) {
        if (!idExists(id)) {
            throw new IdExistsException("ID no. " + id + " not found");
        }
        userRepository.deleteUserById(id);
    }
}


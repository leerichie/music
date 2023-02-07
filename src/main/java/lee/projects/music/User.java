package lee.projects.music;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.Serializable;

@Entity
@Data
@Table(name = "Music")
//@CrossOrigin(origins = "http://localhost:4523")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Artist", nullable = false)
    private String artist;

    @Column(name = "Track_Title", nullable = false)
    private String trackTitle;


}

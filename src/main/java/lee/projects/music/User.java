package lee.projects.music;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
//@Table(name = "user")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

//    @Column(name = "Artist", nullable = false)
    private String artist;

//    @Column(name = "Track_Title", nullable = false)
    private String trackTitle;


}

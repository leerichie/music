package lee.projects.music;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "Music")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Artist", nullable = false)
    private String artist;

    @Column(name = "Track_Title", nullable = false)
    private String trackTitle;


}

import React from "react";
import "../css/beliefs.scss";
// import { Link } from "react-router-dom";
import AboutMenu from "./about-menu";

export default function Beliefs() {
  return (
    <div className="beliefs-values">
      <AboutMenu />
      <div className="beliefs-values-text">
        <h2>Core Values</h2>
        <h3>A reliance on scripture. </h3>
        <span className="scripture">(2 Peter 1:3)</span>
        <p>Life and godliness are found in a knowledge of His Word.</p>
        <h3>An appreciation of preaching. </h3>
        <span className="scripture">(2 Timothy 4:1-2)</span>
        <p>Proclaiming God’s word is our first and greatest responsibility.</p>
        <h3>An attitude of serving. </h3>
        <span className="scripture">(Ephesians 4:11-13)</span>
        <p>Equipping Christ’s followers to serve Him is our purpose.</p>
        <h3>A lifestyle of witnessing. </h3>
        <span className="scripture">(Matthew 5:16)</span>
        <p>
          Preaching the Gospel of Jesus Christ by word and deed is our
          privilege.
        </p>

        <br />
        <h2>Core Beliefs</h2>
        <h3>The Nature of God</h3>
        <p>
          There is one God who eternally exists as three Persons (Father, Son,
          and Holy Spirit) and is the Sovereign Creator of all things (Genesis
          1:1).
          {/* <Link
            className="learn-more-link"
            target={"blank"}
            rel="noopener noreferrer"
            to="https://vbvmi.org/bible-studies/the_sovereignty_of_god#sthash.tGBui5H2.ymWNfxe0.dpbs"
          >
            {" "}
            Learn more about God’s sovereignty.
          </Link> */}
        </p>
        <h3>Scripture</h3>
        <p>
          We believe that the Scriptures have given us everything pertaining to
          life and godliness, including not only salvation from the penalty of
          sin but instruction in righteousness for present sanctification and
          service to the glory of God. God is the final authority as revealed in
          His perfect, trustworthy, and inspired Word, which unfolds His
          character and His purposes (2 Timothy 3:16-17).
          {/* <Link
            className="learn-more-link"
            to={{
              pathname: "/sermon-redirect",
              deepDive:
                "bible-answers/is_scripture_meant_to_be_literal_or_figurative#sthash.coahtwuJ.dpbs",
            }}
          > */}{" "}
          {/* Learn more about interpretation of Scripture.
          </Link> */}
        </p>
        <h3>The Purpose of God</h3>
        <p>
          Everyone and everything has been made by God and for God and therefore
          all glory belongs to Him (Colossians 1:15-20).
        </p>
        <h3>Humanity</h3>
        <p>
          All humanity was created in the image of God, and that when Adam
          sinned he placed all mankind into both physical and spiritual death;
          thus humanity became alienated from God, totally depraved, and
          incapable of remedying our sinful condition by our own means. (Genesis
          1:27)
          {/* <Link
            className="learn-more-link"
            to={{
              pathname: "/sermon-redirect",
              deepDive: "bible-studies/genesis_2011#sthash.YoxCa5hY.dpbs",
            }}
          >
            Access a complete study on the book of Genesis.
          </Link> */}
        </p>
        <h3>Sin</h3>
        <p>
          The world is fallen, and all humanity is separated from God because of
          sin (Genesis 3:1-24; Romans 3:23).
        </p>
        <h3>The Nature of Jesus</h3>
        <p>
          The Lord Jesus Christ was begotten of the Father through the Holy
          Spirit, was born of the virgin Mary, and is wholly man and wholly God.
          (Matthew 1:18-25).
        </p>
        <h3>Jesus' Death & Resurrection</h3>
        <p>
          The Lord Jesus Christ lived a sinless and perfect life that fully
          pleased His Father; that He died on the cross for the sins of those
          who turn to Him in faith, and that He bore the judgment demanded by
          God’s holy justice against sin, so that God remains just and at the
          same time justifies those who believe in Jesus. Jesus Christ rose
          bodily from the dead, never to die again, and ascended to the right
          hand of the Father, where He intercedes as High Priest and Advocate on
          behalf of all who believe in Him. (1 Corinthians 15:1-8).
        </p>
        <h3>Salvation</h3>
        <p>
          Salvation comes by grace, through faith in the finished work of Jesus
          Christ on the cross plus nothing on the part of humanity (Ephesians
          2:1-10).
          {/* <Link
            className="learn-more-link"
            to={{
              pathname: "/sermon-redirect",
              deepDive: "about/how_can_i_go_to_heaven#sthash.RKt1PUNE.dpbs",
            }}
          >
            Learn more about salvation.
          </Link> */}
        </p>
        <h3>The Holy Spirit</h3>
        <p>
          The Holy Spirit baptizes all true believers into the one true Church,
          the body of Christ, indwells every believer eternally, bestows
          spiritual gifts upon them and empowers them for service and holy
          living. The Holy Spirit convicts of sin, seals at conversion, gifts,
          guides, and empowers the believer and the church (John 16:5-15;
          Ephesians 1:13; Acts 1:8).
        </p>
        <h3>The Church</h3>
        <p>
          The church is the body of Christ, with Christ as the Head, and
          functions to fulfill the mission of God (1 Corinthians 12:1-31).
        </p>
        <h3>Jesus' Return and the Kingdom</h3>
        <p>
          We eagerly await Christ’s imminent return for the Church, when
          believers will receive a new body at the resurrection. We believe the
          church will return to Earth with Jesus at His promised Second Coming,
          when He will establish and rule over His 1,000-year Kingdom centered
          in Jerusalem. At the conclusion of the Kingdom, the world will
          experience a final judgment, after which the Father, Son and Spirit
          will dwell eternally among God’s people in the coming New Heavens and
          Earth called the New Jerusalem. (John 14:1-5; 1Corinthians 15;
          Revelation 20-22; Matthew 24:1-51, 25:1-46).
          {/* <Link
            className="learn-more-link"
            to={{
              pathname: "/sermon-redirect",
              deepDive: "bible-studies/revelation_2011#sthash.BKUJuUry.dpbs",
            }}
          >
            Learn more about the End Times.
          </Link> */}
        </p>
        <h3>The Eternal State of Humanity</h3>
        <p>
          All people who have faith in Jesus Christ will spend eternity with God
          in His Kingdom, while all people who do not have faith in Jesus Christ
          remain in their sins and receive the just penalty of eternal
          separation from God in the Lake of Fire. (Matthew 25:1-46; John 5:24;
          Revelation 20:11-15).
        </p>
        <h3>Baptism and the Lord's Supper</h3>
        <p>
          We believe that two ordinances, water (i.e., believer’s) baptism and
          the Lord’s Supper, neither of which is essential to salvation, are to
          be observed by all believers in obedience to our Lord until Christ’s
          return.
        </p>
      </div>
    </div>
  );
}

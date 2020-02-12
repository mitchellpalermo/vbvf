import React from "react";
import { Link } from "react-router-dom";
import Content from "../content/content.json";

export default function FAQ() {
  const faq = Content.aboutPage.faq;
  return (
    <div>
      <h1>{faq.title}</h1>
      <h4>{faq.locationQuestion.title}</h4>
      <p>{faq.locationQuestion.body}</p>
      <h4>{faq.dressQuestion.title}</h4>
      <p>{faq.dressQuestion.body}</p>
      <h4>Can I listen to your messages online?</h4>
      <p>
        Yes, you can find all of our weekly sermons on Verse By Verse Ministry
        International’s website at <a href="www.VBVMI.org">VBVMI.org</a>.
        Sermons are posted following each service.
      </p>
      <h4>What is available for my kids?</h4>
      <p>
        We believe it is important that our littlest ones be trained in the
        truths of the Bible, so they can grow up to love the Word. In our VBVF
        Children’s Ministry, children birth through 5th grade will be able to
        learn Bible lessons in a safe environment, from loving teachers
        committed to ministering to children. Our Children’s ministry is
        committed to the safety of our children. Please plan on arriving a few
        minutes early to register your child with our Children’s ministry staff.
        Our youth ministry is designed to disciple students into adults who love
        God and own their faith. Our leaders are committed to come alongside
        parents in guiding students to mature through various stages of
        discipleship: learning the word, living according to the call, serving
        the body, reaching out to the lost, and stepping up into leadership.
      </p>
      <h4>How do I become a part of VBVF?</h4>
      <p>
        Our church enthusiastically welcomes anyone to meet and worship with us
        every week…no strings attached! If you’re interested in learning more
        about our church or if you’re ready to call VBVF your church home, then
        we invite you to join us at one of our quarterly orientation meeting.
        These meetings offer an opportunity to meet our church leadership, hear
        our pastor explain Verse By Verse Fellowship’s core beliefs and values,
        and ask questions. You can sign up to attend a quarterly orientation
        meeting at the information desk in the church lobby or by filling out
        this <Link to="/contact">web form.</Link>
      </p>
      <h4>How do I join a small group?</h4>
      <p>
        God created us in His image and designed us for relationship. He calls
        us to form relationships with one another so that we may encourage each
        other toward love and good deeds! If you’re interested in small groups,
        please fill out this{" "}
        <a href="https://vbvf.churchcenter.com/people/forms/29086">web form</a>{" "}
        and we’ll be in touch!
      </p>
      <h4>How did VBVF start?</h4>
      <p>
        Although VBVF opened its doors in early 2018, God began preparing people
        for this Church 15 years ago. In 2003, Pastor Stephen Armstrong founded{" "}
        <a href="https://www.versebyverseministry.org/">
          Verse By Verse Ministry International
        </a>
        , a ministry committed to providing compelling, verse-by-verse teaching
        of God’s word at no charge (2Cor 2:17), thus ensuring the whole counsel
        of God is proclaimed (Acts 20:27). With San Antonio roots, VBVMI
        eventually grew into a worldwide ministry with teams in the United
        States, Asia, Costa Rica, New Zealand, and Europe. In 2017, VBVMI’s
        board of directors knew it was time to launch a local church where
        Pastor Armstrong could continue growing VBVMI with solid Bible teaching
        while also fulling the ministry’s mission of equipping the saints for
        the work of ministry.{" "}
      </p>
      <h4>How can I learn more about VBVF?</h4>
      <p>
        Join our weekly newsletter for updates on events and a devotional.{" "}
        <a href="https://vbvf.churchcenter.com/people/forms/26635">
          Click here to sign up.
        </a>
      </p>
    </div>
  );
}

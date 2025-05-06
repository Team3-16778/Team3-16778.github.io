import React from "react";

const sectionStyle = (bgColor) => ({
  backgroundColor: bgColor,
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "20px",
});

const ImplementationPage = () => (
  <>
    <section id="systemImplementation" style={{ ...sectionStyle("lightgreen"), paddingTop: "20px" }}>
      <h2>Project Implementation</h2>
      <h3> Computer Vision</h3>

      The computer vision system, built on a Jetson Nano with dual 8MP Arducam CSI cameras, performs real-time lesion detection and synchronizes needle insertions with stable phases of simulated breathing. CSI cameras are mounted via custom 3D printed brackets unique to each camera's attachment style. Video is processed with OpenCV and visualized in a PyQt-based interface. A custom ColorMask pipeline enhances contrast using Gaussian blur, LAB conversion, and CLAHE, followed by dual HSV thresholding with GUI sliders and an auto-initializing eyedropper tool. Post-processing merges masks and applies morphological ops to refine detection based on contour area and image-center proximity. Lesion tracking over 15 seconds at ~20 Hz enables detection of stable respiratory cycles using MAD filtering and Gaussian smoothing. Insertion timing is derived from cycle extrema, ensuring low-latency, high-accuracy targeting under variable lighting and clutter.

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/computer_vision_in_interface.png"
          alt="Design 2"
          style={{
            height: "400px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        Computer vision interface showing live color masking and bounding box detection on Cam1, with real-time bounding-box and frame updates.
      </p>

      <h3> Gantry</h3>

      The three-axis gantry system provides precise and repeatable end-effector positioning for robotic needle insertion. The Y-axis, built on a rigid C-beam linear actuator driven by a NEMA 23 motor, supports the full crossbeam and ensures stable longitudinal motion. Mounted perpendicularly is the X-axis, a belt-driven V-slot actuator powered by a NEMA 17 motor, enabling lightweight and swift lateral movement. The Z-axis, also belt-driven and NEMA 17-powered, allows controlled vertical travel for accurate depth insertion. Limit switches on all axes enable homing routines at startup, and motion commands are executed via TB6600 stepper drivers connected to an Arduino Mega. The frame combines aluminum extrusions and custom wooden supports, with 3D-printed joints for modularity and rapid iteration. Cable routing is organized with printed guides and sleeves. Motion is coordinated in real-time through serial communication with the Jetson Nano, which transmits lesion coordinates from the vision system to the gantry controller, enabling dynamic and accurate targeting during respiratory-stable phases.

      <h3> End Effector</h3>

      The end effector uses a servo for angular positioning and a linear actuator for needle injection, enabling precise, independent control. Serial commands manage theta rotation and injection depth, allowing synchronized operation with the gantry during biopsy targeting.

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/end_effector_design.png"
          alt="Design 2"
          style={{
            height: "600px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        Finalized manufactrued end effector with component callouts.
      </p>

    </section>

    <section id="systemPerformance" style={sectionStyle("lightorange")}>
      <h2>Project Performance</h2>
      <h3>Main Takeaways</h3>
      <p>
        Extensive testing confirmed high positional accuracy across all subsystems. The gantry achieved 95% accuracy within ±0.5 mm, while the linear and angular actuators reached 90% and 85%, respectively. Performance trials showed fast average positioning times &gt;15 s for the gantry, 10 s for the linear actuator, and &gt;7 s for the angular actuator—with accuracy above 90% across all components. Key strengths include mechanical precision, repeatability, and modularity.
      </p>

      <p>
        Future improvements will target friction reduction when entering the phantom, better computer vision feedback and positioning, and streamlined setup.
      </p>

      <h3>Computer Vision</h3>
      <p>
        Initial results showed the system was able to detect objects using either YOLO or a color mask, with some back in forth and eventually the team settling on a color mask based approach.
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="/assets/media/color_mask_rough.jpeg"
          alt="Color Mask - Live Data"
          style={{ width: "400px", height: "auto", margin: "10px 0" }}
        />
        <img
          src="/assets/media/color_mask_fake_data.png"
          alt="Color Mask - Simulated Data"
          style={{ width: "400px", height: "auto", margin: "10px 0" }}
        />
        <p style={{ textAlign: "center", marginTop: "10px", fontStyle: "italic" }}>
          Initial color mask object detection results
        </p>
      </div>


      <p>
        In an effort to improve the perfomance, measures were taken to post-process the image (eg. weighting central points) and use dual HSV thresholding to improve the detection. A full look at the colormask class if available here <a style={{ color: "black", fontWeight: "bold" }} href="https://github.com/Team3-16778/Interface/blob/main/ColorMask.py">ColorMask.py</a>. The end result is a much more robust and reliable detection system that is able to detect the target object in a variety of lighting conditions and with a variety of backgrounds and the end user can point and click to set the HSV values. </p>


      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/cm_tuned.png"
          alt="Design 2"
          style={{
            height: "700px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        Robust color mask system with dual HSV thresholding and post-processing.
      </p>

      <p> A broader view of the code writeen in this project and it's history is accessible on the <a style={{ color: "black", fontWeight: "bold" }} href="https://github.com/Team3-16778/Interface/tree/main">Team's GitHub</a>.</p>



      <h3>Gantry</h3>

      <div style={{ marginTop: "1em" }}>
        <p>
          The gantry system became fully functional after adjustments. Two key issues were identified and resolved through testing:
        </p>
        <ul style={{ paddingLeft: "1.5em", marginTop: "0.5em" }}>
          <li style={{ marginBottom: "0.5em" }}>
            During homing, the gantry occasionally hit the limit switches too hard, causing them to break. This was fixed by reducing the homing speed and slightly adjusting the switch mounting.
          </li>
          <li>
            During injection, the insertion motion was initially choppy. Fine-tuning the Y and Z actuator speeds allowed smoother synchronized movement at the desired insertion angle (30° below horizontal).
          </li>
        </ul>

      </div>
      <p>
        For more information on Gantry troubleshooting and construction, contact Jack </p>


      <h3>End Effector</h3>
      <p>
        Arushi's original design was too heavy for the servo mount, but she quickly refactored to use a better servo mount which worked very well. To learn more about this process, you may read <a style={{ color: "black", fontWeight: "bold" }} href="https://drive.google.com/drive/folders/1f4UQ71y84HZz48Y93UMKa-8skSeolSej?usp=drive_link">Arushi's ILRs</a> from the later half of the semster.
        
      </p>
    </section>

  </>
);

export default ImplementationPage;

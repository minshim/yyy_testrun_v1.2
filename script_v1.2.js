document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".title");
  const showAllBtn = document.getElementById("showAllBtn");

  // Toggle individual galleries and details when clicking titles
  titles.forEach(function (title) {
      title.addEventListener("click", function () {
          const gallery = title.nextElementSibling;
          const details = title.querySelector(".details");

          // Toggle gallery visibility
          if (gallery && gallery.classList.contains("gallery")) {
              gallery.classList.toggle("hidden");
          }

          // Toggle details visibility (opacity 0 or 1)
          if (details) {
              details.style.opacity = details.style.opacity === "1" ? "0" : "1";
          }
      });
  });

  // Show or hide all images when clicking the "Show All" button
  showAllBtn.addEventListener("click", function () {
      const galleries = document.querySelectorAll(".gallery");
      const details = document.querySelectorAll(".details");
      let allVisible = true;

      // Check if all galleries are visible
      galleries.forEach(function (gallery) {
          if (gallery.classList.contains("hidden")) {
              allVisible = false;
          }
      });

      // Check if all details are visible
      details.forEach(function (detail) {
          if (detail.style.opacity === "0") {
              allVisible = false;
          }
      });

      if (allVisible) {
          // Hide all galleries and details
          galleries.forEach(function (gallery) {
              gallery.classList.add("hidden"); // Hide galleries
          });
          details.forEach(function (detail) {
              detail.style.opacity = "0"; // Hide details
          });
          showAllBtn.textContent = "OPEN ALL"; // Change button text to "OPEN"
      } else {
          // Show all galleries and details
          galleries.forEach(function (gallery) {
              gallery.classList.remove("hidden"); // Show galleries
          });
          details.forEach(function (detail) {
              detail.style.opacity = "1"; // Show details
          });
          showAllBtn.textContent = "CLOSE ALL"; // Change button text to "CLOSE"
      }
  }); 
});



  //------------------------------------

// ! order here: earliest to latest //

// --- GATEWAY 201501 //
const galleryData = {
  1: [
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7571.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7585.JPG", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7593.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7582.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7280.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0002.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0003.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0005.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0006.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/exhibit/IMG_7242.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/exhibit/IMG_7285.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/exhibit/IMG_7251.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/exhibit/IMG_7265.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/exhibit/IMG_7294.jpg", caption: "" },
  ],
// --- about there //
2: [

  { src: "bau/img/02_about there/IMG_1159.JPG", caption: "" },
  { src: "bau/img/02_about there/IMG_9797.jpg", caption: "" },
  { src: "bau/img/02_about there/IMG_9242.jpg", caption: "" },
  { src: "bau/img/02_about there/IMG_9243.JPG", caption: "" },
  { src: "bau/img/02_about there/IMG_9793.JPG", caption: "" },
  { src: "bau/img/02_about there/IMG_9804.JPG", caption: "" },
  { src: "bau/img/02_about there/IMG_9977.JPG", caption: "" },
],
// --- GATEWAY 201601 //
3: [

  { src: "bau/img/03_GATEWAY-2016-01/IMG_5223.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_5511.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6399.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6401.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6405.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6407.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6408.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6409.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6410.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6411.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6413.JPG", caption: "" },
  { src: "bau/img/03_GATEWAY-2016-01/IMG_6415.JPG", caption: "" },


],
// --- A LONG DAY //
4: [

  { src: "bau/img/04_ALONGDAY/IMG_0544.JPG", caption: "" },
  { src: "bau/img/04_ALONGDAY/IMG_0545.JPG", caption: "" },
  { src: "bau/img/04_ALONGDAY/IMG_0547.JPG", caption: "" },
  { src: "bau/img/04_ALONGDAY/IMG_0549.JPG", caption: "" },
  { src: "bau/img/04_ALONGDAY/IMG_0550.JPG", caption: "" },
  { src: "bau/img/04_ALONGDAY/IMG_0551.JPG", caption: "" },
],
// --- DAYS GONE //
5: [
  { src: "bau/img/04.5_DAYSGONE/IMG_1627.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1663.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1664.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1665.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1666.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1667.JPG", caption: "" },
  { src: "bau/img/04.5_DAYSGONE/IMG_1266.mp4", type: "video", caption: "" }, // video
],
// --- GATEWAY 201703 //
6: [
  { src: "bau/img/05_GATEWAY-2017-03/G17_1-2.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/G17_1-3.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/G17_1-1.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-2.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-3.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-4.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-5.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-6.jpg", caption: "" },
  { src: "bau/img/05_GATEWAY-2017-03/YYY-GW1703-7.jpg", caption: "" },
],
// --- YYY apparel //
7: [

  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0003.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0004.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0005.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0006.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0007.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0008.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0009.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0010.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/YYY__20200423_0011.jpg", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9544.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9536.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9533.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9542.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9532.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9531.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9534.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9541.JPG", caption: "" },
  { src: "bau/img/05.1_YYY apparel/IMG_9546.JPG", caption: "" },
],
// --- Sight //
8: [

  { src: "bau/img/06_SIGHT/IMG_3129.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3130.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3131.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3132.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3133.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3134.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3135.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3136.JPG", caption: "" },
  { src: "bau/img/06_SIGHT/IMG_3137.JPG", caption: "" },

],
// --- 何じょう物じゃ //
9: [

  { src: "bau/img/07_AnnyaMonnya/IMG_3104.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3105.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3107.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3108.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3109.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3110.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3111.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3112.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3716.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3718 2.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_3708.JPG", caption: "" },
  { src: "bau/img/07_AnnyaMonnya/IMG_0295.JPG", caption: "" },
  
],
// --- transform //
10: [

  { src: "bau/img/08_transform/IMG_6864.JPG", caption: "" },
  { src: "bau/img/08_transform/IMG_6866.JPG", caption: "" },
  { src: "bau/img/08_transform/IMG_6868.JPG", caption: "" },
  { src: "bau/img/08_transform/IMG_6870.JPG", caption: "" },
  { src: "bau/img/08_transform/IMG_6873.JPG", caption: "" },
  { src: "bau/img/08_transform/NY_YYY_transform_1.jpg", caption: "" },
  { src: "bau/img/08_transform/IMG_3395.jpg", caption: "" },
  { src: "bau/img/08_transform/IMG_3396.JPG", caption: "" },
  
],
// --- GATEWAY 202012//
11: [
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_2.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_3.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_4.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_5.jpg", caption: "" },
  // { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_6.jpg", caption: "" },
  // { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_7.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_8.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_9.jpg", caption: "" },
  // { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_10.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_11.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/IMG_1308.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/IMG_1315.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/IMG_5806.jpg", caption: "" },
  { src: "bau/img/09_GATEWAY-2020-12/GATEWAY202012_copie.mp4", type: "video", caption: "" }, // video


],
// --- いのちの裂け目 ACAC //
12: [

  { src: "bau/img/10_ACAC/ACAC_1.jpg", caption: "" },
  { src: "bau/img/10_ACAC/ACAC_3.jpg", caption: "" },
  { src: "bau/img/10_ACAC/IMG_3142.JPG", caption: "" },
  { src: "bau/img/10_ACAC/IMG_7079-2.jpg", caption: "" },
  { src: "bau/img/10_ACAC/IMG_7080-2.jpg", caption: "" },
  
  { src: "bau/img/10_ACAC/IMG_7077_1.mp4", type: "video", caption: "" }, // video
  
],
// --- [          ] //
13: [

  { src: "bau/img/10.2_TT_kakko/IMG_3124_2.jpg", caption: "" },
  // { src: "bau/img/10.2_TT_kakko/IMG_3124_3.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_4.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_5.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_6.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_7.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_8.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_9.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_10.jpg", caption: "" },
  { src: "bau/img/10.2_TT_kakko/IMG_3124_11.jpg", caption: "" },
],
// --- picninc //
14: [
  { src: "bau/img/10.3_osakentaro picninc/IMG_9647.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_9648.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_9649.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_9653.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/dsc00023.JPG", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_5761.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_5766.jpg", caption: "" },
  { src: "bau/img/10.3_osakentaro picninc/IMG_8649.JPG", caption: "" },
],
// --- about there 1/2 //
15: [
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9370.jpg", caption: "" },
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9358.jpg", caption: "" },
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9371.jpg", caption: "" },
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9372.jpg", caption: "" },
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9374.jpg", caption: "" },
  { src: "bau/img/10.4_NaoyaMatsumoto/IMG_9446.PNG", caption: "" },
],

// --- kougei 工芸と工業のあいだ //
16: [
  { src: "bau/img/10.5_kougei/kougeitokougyounoaida_2.jpg", caption: "" },
  { src: "bau/img/10.5_kougei/kougeitokougyounoaida_3.jpg", caption: "" },
  { src: "bau/img/10.5_kougei/kougeitokougyounoaida_4.jpg", caption: "" },
  { src: "bau/img/10.5_kougei/kougeitokougyounoaida_5.jpg", caption: "" },
  { src: "bau/img/10.5_kougei/kougeitokougyounoaida_6.jpg", caption: "" },
  { src: "bau/img/10.5_kougei/IMG_6842.mp4", type: "video", caption: "" }, // video

],
// --- NewHabitations //
17: [
    { src: "bau/img/11_NewHabitations/DSC_6418_in.jpg", caption: "" },
    { src: "bau/img/11_NewHabitations/DSC_6423_in.jpg", caption: "" },
    { src: "bau/img/11_NewHabitations/DSC_6432_in.jpg", caption: "" },
    { src: "bau/img/11_NewHabitations/DSC_6448_in.jpg", caption: "" },
    { src: "bau/img/11_NewHabitations/DSC_6453_in.jpg", caption: "" },
    { src: "bau/img/11_NewHabitations/IMG_6897.mp4", type: "video", caption: "" }, // video
    { src: "bau/img/11_NewHabitations/IMG_6898.mp4", type: "video", caption: "" }, // video
    { src: "bau/img/11_NewHabitations/IMG_6935.mp4", type: "video", caption: "" }, // video

  ],

// --- Common Face //
18: [
  { src: "bau/img/11.1_Common Face/IMG_3988.JPG", caption: " " },
  { src: "bau/img/11.1_Common Face/IMG_3987.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/2_DSCF1660z.jpg", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_3738.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/3_DSCF1662.JPG", caption: " " },
    // { src: "bau/img/11.1_Common Face/6_DSCF1692.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/7_DSCF1695.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/8_DSCF1670.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/9_DSCF1671.JPG", caption: " " },
    // { src: "bau/img/11.1_Common Face/10_DSCF1677.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1656.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1702.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_3741.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1664.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1658.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1698z.jpg", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_3747.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_3763 2.JPG", caption: " " },
  
    { src: "bau/img/11.1_Common Face/common face_trim.mp4", type: "video", caption: "" }, // video
    { src: "bau/img/11.1_Common Face/IMG_6999.mp4", type: "video", caption: "" }, // video
  ],

  // --- HAMADA ARCHITECTS™︎ //
  19: [
    { src: "bau/img/11.2_HAMADA ARCHITECTS/aa.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/b.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/c.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/d.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/e.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/f.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/g.jpg", caption: "" },
    { src: "bau/img/11.2_HAMADA ARCHITECTS/h.jpg", caption: "" },
  ],
  // --- GATEWAY 202405//
  20: [
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_2.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_3.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_4.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_5.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_6.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_7.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_8.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_9.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_10.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_11.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_12.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_13.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_14.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_15.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_16.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_17.jpg", caption: " " },
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_18.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_19.jpg", caption: " " },    
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_20.jpg", caption: " " },    
    // { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_21.jpg", caption: " " },    
    { src: "bau/img/12_GATEWAY-2024-05/gateway_24.mp4", type: "video", caption: "" }, // video
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2771.JPG", caption: " " },    
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2774.JPG", caption: " " },    
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2787.JPG", caption: " " },    


  ],

    // --- S(e)oul mate//
    21: [
      { src: "bau/img/13_seoulmate/2_DSC_0320.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/3_DSC_0391.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/5_DSC_0598.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/6_DSC_0445.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/7_DSC_0453.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/8_DSC_0456.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/9_DSC_0471.jpg", caption: "" },
      // { src: "bau/img/13_seoulmate/10_DSC_0500.jpg", caption: "" },
      // { src: "bau/img/13_seoulmate/11_DSC_0515.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/12_DSC_0523.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/13_DSC_0550.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/14_DSC_0578.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/15_DSC_0589.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/16_DSC_0332.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/17_DSC_0359.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/18_DSC_0608.jpg", caption: "" },
      { src: "bau/img/13_seoulmate/IMG_3907.mp4", type: "video", caption: "" }, // video
      { src: "bau/img/13_seoulmate/IMG_3914.mp4", type: "video", caption: "" }, // video
      { src: "bau/img/13_seoulmate/IMG_3917.mp4", type: "video", caption: "" }, // video
      
      
    ],
};




// index for gallery
const galleryIndices = {
  1: 1, 
  2: 1,
  3: 1, 
  4: 1, 
  5: 1, 
  6: 1,
  7: 1, 
  8: 1, 
  9: 1, 
  10: 1,
  11: 1, 
  12: 1, 
  13: 1, 
  14: 1,
  15: 1, 
  16: 1, 
  17: 1, 
  18: 1,
  19: 1, 
  20: 1, 
  21: 1 
};


function addImage(event) {
  const galleryElement = event.currentTarget;
  const galleryId = galleryElement.dataset.galleryId; // ギャラリーIDを取得
  const images = galleryData[galleryId];
  const currentIndex = galleryIndices[galleryId];

  if (currentIndex < images.length) {
    const newFigure = document.createElement("figure");

    // 画像または動画のタイプを確認
    if (images[currentIndex].type === "video") {
      // 動画を追加
      const newVideo = document.createElement("video");
      newVideo.src = images[currentIndex].src;
      newVideo.autoplay = true;  // 自動再生
      newVideo.muted = true;    // 無音
      newVideo.loop = false;    // ループなし
      newVideo.controls = false; // コントロールを非表示（残り秒数等も非表示）
newVideo.setAttribute("playsinline", "true");  // ← スマホでフルスクリーン防止
newVideo.setAttribute("webkit-playsinline", "true");  // ← iOS対策
newVideo.removeAttribute("controls");  // ← コントロールUIを完全に削除
newVideo.style.overflow = "hidden";
newVideo.style.pointerEvents = "none";  // ← タップによるフルスクリーン化を防止
      
      // スクロールバーを非表示にするためのスタイル設定
      newVideo.style.overflow = "hidden";  // 動画が表示される部分以外にスクロールバーが出ないようにする

      newFigure.appendChild(newVideo);
    } else {
      // 画像を追加
      const newImage = document.createElement("img");
      newImage.src = images[currentIndex].src;
      newImage.alt = `Gallery ${galleryId} - Image ${currentIndex + 1}`;
      newFigure.appendChild(newImage);
    }

    // キャプションを追加
    const newCaption = document.createElement("figcaption");
    newCaption.textContent = images[currentIndex].caption;
    newFigure.appendChild(newCaption);

    // ギャラリーに新しいfigureを追加
    galleryElement.prepend(newFigure);

    // インデックスを次に進める
    galleryIndices[galleryId]++;
  }
}






document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.getElementById("Order");
  const galleryContainer = document.querySelector(".gallery-container");

  if (!orderButton || !galleryContainer) {
      console.error("Button or gallery container not found!");
      return;
  }

  // 初期のボタン状態を設定
  orderButton.dataset.order = "latest";

  orderButton.addEventListener("click", function () {
      // 全ての要素を取得
      const items = Array.from(galleryContainer.children);

      // タイトルとギャラリーをペアにする
      let groupedItems = [];
      for (let i = 0; i < items.length; i += 2) {
          if (items[i].classList.contains("title") && items[i + 1]?.classList.contains("gallery")) {
              groupedItems.push([items[i], items[i + 1]]);
          }
      }

      if (groupedItems.length === 0) {
          console.error("No valid title-gallery pairs found.");
          return;
      }

      // ペアを逆順に並び替え
      groupedItems.reverse();

      // 既存の要素を並び替え
      groupedItems.forEach(([title, gallery]) => {
          galleryContainer.appendChild(title);
          galleryContainer.appendChild(gallery);
      });

      // ボタンのテキストを切り替え
      if (orderButton.dataset.order === "latest") {
          orderButton.textContent = "LATEST \u2192 EARLIEST";
          orderButton.dataset.order = "oldest";
      } else {
          orderButton.textContent = "EARLIEST \u2192 LATEST";
          orderButton.dataset.order = "latest";
      }

      console.log("Gallery order switched!");
  });
});


const zoomLevels = [0.6, 0.8, 1.0, 1.2, 1.4]; // Scale factors for zoom
let currentZoomIndex = 2; // Start with default zoom of 1.0 (normal size)

const galleryContainer = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");

if (!galleryContainer || !gallery) {
    console.error("Gallery container or gallery not found!");
} else {
    // Zoom In button click event
    document.getElementById("zoomInBtn").addEventListener("click", function() {
        if (currentZoomIndex < zoomLevels.length - 1) {
            currentZoomIndex++;
            updateGalleryZoom();
        }
    });

    // Zoom Out button click event
    document.getElementById("zoomOutBtn").addEventListener("click", function() {
        if (currentZoomIndex > 0) {
            currentZoomIndex--;
            updateGalleryZoom();
        }
    });

    // Function to update the zoom of the gallery
    function updateGalleryZoom() {
        const zoomFactor = zoomLevels[currentZoomIndex];

        // Always keep gallery container width at 100vw
        galleryContainer.style.width = "100vw"; 

        // Scale the gallery container (zooming effect)
        galleryContainer.style.transform = `scale(${zoomFactor})`;

        // Adjust layout of images inside the gallery based on zoom factor
        if (zoomFactor <= 1.0) {
            // When zoomed out, images float and wrap
            gallery.style.justifyContent = "flex-start";
        } else {
            // When zoomed in, images are centered
            gallery.style.justifyContent = "center";
        }
    }
}






function toggleDetails(element) {
  element.classList.toggle("clicked");
}


  // リセットボタンのクリックイベント
  document.getElementById('reset-button').addEventListener('click', function() {
    window.scrollTo(0, 0);  // スクロール位置をリセット
    location.reload();      // ページをリロード
  });
  
  document.getElementById("fullscreen-btn").addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

  
// Helper function to shuffle an array (Fisher-Yates Algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Track shuffled images per gallery
const shuffledGalleryData = {};

function addImage(event) {
  const galleryElement = event.currentTarget;
  const galleryId = galleryElement.dataset.galleryId; // Get gallery ID

  // If not shuffled yet, shuffle and store
  if (!shuffledGalleryData[galleryId]) {
    shuffledGalleryData[galleryId] = [...galleryData[galleryId]]; // Clone original
    shuffleArray(shuffledGalleryData[galleryId]); // Shuffle the clone
    galleryIndices[galleryId] = 0; // Reset index
  }

  const images = shuffledGalleryData[galleryId];
  const currentIndex = galleryIndices[galleryId];

  if (currentIndex < images.length) {
    const newFigure = document.createElement("figure");

    if (images[currentIndex].type === "video") {
      const newVideo = document.createElement("video");
      newVideo.src = images[currentIndex].src;
      newVideo.autoplay = true;
      newVideo.muted = true;
      newVideo.loop = false;
newVideo.setAttribute("playsinline", "true");  // ← スマホでフルスクリーン防止
newVideo.setAttribute("webkit-playsinline", "true");  // ← iOS対策
newVideo.removeAttribute("controls");  // ← コントロールUIを完全に削除
newVideo.style.overflow = "hidden";
newVideo.style.pointerEvents = "none";  // ← タップによるフルスクリーン化を防止
      newVideo.controls = false;
      newVideo.style.overflow = "hidden";
      newFigure.appendChild(newVideo);
    } else {
      const newImage = document.createElement("img");
      newImage.src = images[currentIndex].src;
      newImage.alt = `Gallery ${galleryId} - Image ${currentIndex + 1}`;
      newFigure.appendChild(newImage);
    }

    const newCaption = document.createElement("figcaption");
    newCaption.textContent = images[currentIndex].caption;
    newFigure.appendChild(newCaption);

    galleryElement.prepend(newFigure);
    galleryIndices[galleryId]++;
  }
}





function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}



let topButton = document.getElementById("topBtn");

// Show button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



 // Prevent fullscreen video


document.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "video") {
      event.preventDefault(); 
  }
});


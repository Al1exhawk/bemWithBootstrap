$(document).ready(function() {
  $(".button[filter]").click(function() {
    if ($(this).attr("val") === "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".button[filter]").removeClass("focused");
      $(this).addClass("focused");
      if ($(this).attr("filter") === "all") {
        $(".filter > div").show(300);
      } else {
        const filter = $(this).attr("filter");
        $(".filter > div").hide(300);
        $(`.filter > div[filter=${filter}]`).show(300);
      }
    }
  });
});

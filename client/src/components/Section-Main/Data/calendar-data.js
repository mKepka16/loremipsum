import moment from "moment";
var rozpoczecieCiazy = moment(cosTamZBackendu).toDate();
var cosTamZBackendu = "2020-10-17T10:00:00.000Z";
const events = [
  {
    start: rozpoczecieCiazy,
    end: rozpoczecieCiazy,
    title: "Początek ciąży",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacus nec mauris porta dignissim. Integer ligula risus, convallis a dolor sed, viverra consectetur velit. Phasellus ex felis, feugiat dignissim bibendum vitae, mattis sagittis augue. Quisque finibus odio at nisi auctor varius. In maximus dui et lorem scelerisque, quis vehicula dolor volutpat. Donec eu ex eu urna lobortis auctor. Aenean rhoncus egestas quam, nec semper turpis faucibus id. Quisque massa purus, imperdiet cursus iaculis ac, tempus vitae ligula.",
    color: "red",
  },
  {
    start: moment().add(10, "days").toDate(),
    end: moment().add(14, "days").toDate(),
    title: "Pierwsze USG",
    description:
      "Praesent vitae felis enim. Sed diam ante, lacinia a metus a, efficitur blandit turpis. Aliquam justo libero, consequat id nunc a, molestie ultrices metus. Vivamus cursus, arcu nec rutrum pulvinar, nibh ante molestie tellus, tristique dictum ante nibh nec ipsum. Maecenas iaculis suscipit ante nec commodo.",
    color: "green",
  },
  {
    start: moment().add(2, "days").toDate(),
    end: moment().add(5, "days").toDate(),
    title: "Badanie krwi",
    description:
      "Nullam ac lectus gravida, vestibulum nunc quis, eleifend arcu. Phasellus mollis a nisl nec placerat. Sed id purus ac turpis varius posuere. Suspendisse semper nibh elit, quis bibendum metus placerat egestas. Nunc eu elementum felis. Duis quis quam ornare, bibendum est vitae, eleifend nunc",
    color: "yellow",
  },
];

export default events;

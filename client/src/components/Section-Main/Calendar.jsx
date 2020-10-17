import MainLayout from "./Partials/MainLayout";
import React, { Component, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
var cosTamZBackendu = "2020-10-17T10:00:00.000Z";
var rozpoczecieCiazy = moment(cosTamZBackendu).toDate();

function color(event) {
  var backgroundColor = event.color;
  var style = {
    backgroundColor: backgroundColor,
  };
  return {
    style: style,
  };
}
var events = [
  {
    start: rozpoczecieCiazy,
    end: rozpoczecieCiazy,
    title: "Rozpoczecie ciazy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacus nec mauris porta dignissim. Integer ligula risus, convallis a dolor sed, viverra consectetur velit. Phasellus ex felis, feugiat dignissim bibendum vitae, mattis sagittis augue. Quisque finibus odio at nisi auctor varius. In maximus dui et lorem scelerisque, quis vehicula dolor volutpat. Donec eu ex eu urna lobortis auctor. Aenean rhoncus egestas quam, nec semper turpis faucibus id. Quisque massa purus, imperdiet cursus iaculis ac, tempus vitae ligula.",
    color: "red",
  },
  {
    start: moment().add(10, "days").toDate(),
    end: moment().add(14, "days").toDate(),
    title: "Pierwsze USG",
    description: "Praesent vitae felis enim. Sed diam ante, lacinia a metus a, efficitur blandit turpis. Aliquam justo libero, consequat id nunc a, molestie ultrices metus. Vivamus cursus, arcu nec rutrum pulvinar, nibh ante molestie tellus, tristique dictum ante nibh nec ipsum. Maecenas iaculis suscipit ante nec commodo.",
    color: "green",
  },
  {
    start: moment().add(2, "days").toDate(),
    end: moment().add(5, "days").toDate(),
    title: "Badanie krwi",
    description: "Nullam ac lectus gravida, vestibulum nunc quis, eleifend arcu. Phasellus mollis a nisl nec placerat. Sed id purus ac turpis varius posuere. Suspendisse semper nibh elit, quis bibendum metus placerat egestas. Nunc eu elementum felis. Duis quis quam ornare, bibendum est vitae, eleifend nunc",
    color: "yellow",
  },
];

export default function Calendary(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClickOpen = (title, description) => {
    setOpen(true);
    setTitle(title);
    setDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainLayout>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>

      <Calendar
        localizer={localizer}
        defaultView="month"
        events={events}
        style={{ height: "90vh" }}
        eventPropGetter={color}
        onSelectEvent={(event) =>
          handleClickOpen(event.title, event.description)
        }
      />
    </MainLayout>
  );
}

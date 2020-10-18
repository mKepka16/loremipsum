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
import "moment/locale/pl";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./Data/calendar-data";
const localizer = momentLocalizer(moment);
function color(event) {
  var backgroundColor = event.color;
  var style = {
    backgroundColor: backgroundColor,
  };
  return {
    style: style,
  };
}
const messages = {
  allDay: "Wszystkie dni",
  previous: "<",
  next: ">",
  today: "Dzisiaj",
  month: "Miesiąc",
  week: "Tydzień",
  day: "Dzień",
  agenda: "Agenda",
  date: "Data",
  time: "Czas",
  event: "Wydarzenie",
  Mon: "Poniedziałek",
  showMore: (total) => `+ Pokaż więcej (${total})`,
};
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
        messages={messages}
        onSelectEvent={(event) =>
          handleClickOpen(event.title, event.description)
        }
      />
    </MainLayout>
  );
}

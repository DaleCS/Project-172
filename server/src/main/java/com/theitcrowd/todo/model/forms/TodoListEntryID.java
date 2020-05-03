package com.theitcrowd.todo.model.forms;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

public class TodoListEntryID {
    @NotNull
    private long ID;

    public TodoListEntryID(@JsonProperty("ID") long ID) {
        this.ID = ID;
    }

    public long getId() {
        return ID;
    }
}

package com.theitcrowd.todo.model.forms;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

public class TodoListEntryID {
    @NotNull
    private long entryID;

    public TodoListEntryID(@JsonProperty("entryID") long entryID) {
        this.entryID = entryID;
    }

    public long getEntryId() {
        return entryID;
    }
}

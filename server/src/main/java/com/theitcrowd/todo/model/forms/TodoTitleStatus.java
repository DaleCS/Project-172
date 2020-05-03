package com.theitcrowd.todo.model.forms;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

public class TodoTitleStatus {
    @NotNull
    private long ID;

    @NotNull
    private String titleStatus;

    public TodoTitleStatus(@JsonProperty("ID") long ID, @JsonProperty("titleStatus") String titleStatus) {
        this.ID = ID;
        this.titleStatus = titleStatus;
    }

    public long getId() {
        return ID;
    }

    public String getTitleStatus(){
        return titleStatus;
    }
}

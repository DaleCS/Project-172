package com.theitcrowd.todo.model.forms;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

public class TodoEntryForm {
	@NotNull
	private String title;
	
	@NotNull
	private long todo_list_id;
	
	@NotNull
	private String description;
	
	@NotNull
	private String status;
	
	public TodoEntryForm(@JsonProperty("title") String title, @JsonProperty("todo_list_id") long todo_list_id,
			@JsonProperty("status") String status) {
		this.title = title;
		this.todo_list_id = todo_list_id;
		this.status = status;
	}
	
	public String getTitle() {
		return title;
	}
	
	public long getListId() {
		return todo_list_id;
	}
	
	public String getStatus() {
		return status;
	}
}

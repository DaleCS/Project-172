package com.theitcrowd.todo.model.forms;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

public class TodoListForm {
	@NotNull
	private String title;
	
	@NotNull
	private long user_id;
	
	@NotNull
	private String description;
	
	@NotNull
	private String status;
	
	public TodoListForm(@JsonProperty("title") String title, @JsonProperty("user_id") long user_id,
			@JsonProperty("status") String status) {
		this.title = title;
		this.user_id = user_id;
		this.status = status;
	}
	
	public String getTitle() {
		return title;
	}
	
	public long getUserId() {
		return user_id;
	}
	

	public String getStatus() {
		return status;
	}
}

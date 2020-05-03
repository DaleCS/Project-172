package com.theitcrowd.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TodoListEntry {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long entry_id;
	private long todo_list_id;
	private String title;
	private String description;
	private String status;

	public long getEntry_id() {
		return entry_id;
	}

	public void setEntry_id(long entry_id) {
		this.entry_id = entry_id;
	}

	public long getTodo_list_id() {
		return todo_list_id;
	}

	public void setTodo_list_id(long todo_list_id) {
		this.todo_list_id = todo_list_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}

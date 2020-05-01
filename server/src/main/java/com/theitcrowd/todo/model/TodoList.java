package com.theitcrowd.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TodoList {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long todo_list_id;
	private String title;
	private long user_id;
	private String description;
	private String status;
    private String creationDate;
    private String modification_date;
    
	public long getTodo_list_id() {
		return todo_list_id;
	}

	public void setTodo_list_id(long todo_list_id) {
		this.todo_list_id = todo_list_id;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id2) {
		this.user_id = user_id2;
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

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public String getModification_date() {
		return modification_date;
	}

	public void setModification_date(String modification_date) {
		this.modification_date = modification_date;
	}
}

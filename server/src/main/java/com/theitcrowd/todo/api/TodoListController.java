package com.theitcrowd.todo.api;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.theitcrowd.todo.dao.ListEntryDAO;
import com.theitcrowd.todo.dao.TodoListDAO;
import com.theitcrowd.todo.model.*;
import com.theitcrowd.todo.model.forms.TodoEntryForm;
import com.theitcrowd.todo.model.forms.TodoListForm;


@RequestMapping(path = "api/todolists")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {
	
	@Autowired
	private TodoListDAO todoListDAO;
	@Autowired
	private ListEntryDAO listEntryDAO;
	

	@PostMapping(path = "/addList")
	@Transactional
	public @ResponseBody String addList(@RequestBody TodoListForm todoListForm) {
		if (todoListDAO == null) {
			return "Not saved";
		}
		todoListDAO.insertList(todoListForm.getTitle(), todoListForm.getUserId(), todoListForm.getStatus());
		return "Saved";
	}

	@GetMapping(path = "/allLists")
	public @ResponseBody List<TodoList> getAllTodoLists(@RequestParam long user_id){
		return todoListDAO.findAllLists(user_id);
	}
	
	@PostMapping(path="/addEntry")
	@Transactional
	public @ResponseBody String addNewEntry (@RequestBody TodoEntryForm todoEntryForm) {
		listEntryDAO.insertEntry(todoEntryForm.getTitle(), todoEntryForm.getListId(), todoEntryForm.getStatus());
		return "Saved";
	}
	
	@GetMapping(path = "/allEntries")
	public List<TodoListEntry> getAllTodoListEntries(@RequestParam long todoListID){
		return listEntryDAO.findAllEntries(todoListID);
	}
}

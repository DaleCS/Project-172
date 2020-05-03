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
import com.theitcrowd.todo.model.forms.TodoListEntryID;
import com.theitcrowd.todo.model.forms.TodoListForm;
import com.theitcrowd.todo.model.forms.TodoTitleStatus;

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

	@PostMapping(path = "/deleteList")
	@Transactional
	public @ResponseBody String deleteList(@RequestBody TodoListEntryID todoListID) {
		listEntryDAO.deleteList(todoListID.getId());
		todoListDAO.deleteList(todoListID.getId());
		return "List Deleted";
	}

	@PostMapping(path = "/updateListTitle")
	@Transactional
	public @ResponseBody String updateListTitle(@RequestBody TodoTitleStatus todo) {
		todoListDAO.updateListTitle(todo.getId(), todo.getTitleStatus());
		return "updated title";
	}

	@PostMapping(path = "/updateListStatus")
	@Transactional
	public @ResponseBody String updateListStatus(@RequestBody TodoTitleStatus todo) {
		todoListDAO.updateListStatus(todo.getId(), todo.getTitleStatus());
		return "updated status";
	}

	@GetMapping(path = "/allLists")
	public @ResponseBody List<TodoList> getAllTodoLists(@RequestParam long user_id) {
		return todoListDAO.findAllLists(user_id);
	}

	@PostMapping(path = "/addEntry")
	@Transactional
	public @ResponseBody String addNewEntry(@RequestBody TodoEntryForm todoEntryForm) {
		listEntryDAO.insertEntry(todoEntryForm.getTitle(), todoEntryForm.getListId(), todoEntryForm.getStatus());
		return "Saved";
	}

	@PostMapping(path = "/deleteListEntry")
	@Transactional
	public @ResponseBody String deleteListEntry(@RequestBody TodoListEntryID entryID) {
		listEntryDAO.deleteEntry(entryID.getId());
		return "Entry deleted";
	}

	@PostMapping(path = "/updateEntryTitle")
	@Transactional
	public @ResponseBody String updateListEntry(@RequestBody TodoTitleStatus entry) {
		listEntryDAO.updateEntryTitle(entry.getId(), entry.getTitleStatus());
		return "updated title";
	}

	@PostMapping(path = "/updateEntryStatus")
	@Transactional
	public @ResponseBody String updateEntryStatus(@RequestBody TodoTitleStatus entry) {
		listEntryDAO.updateEntryStatus(entry.getId(), entry.getTitleStatus());
		return "updated status";
	}

	@GetMapping(path = "/allEntries")
	public List<TodoListEntry> getAllTodoListEntries(@RequestParam long todoListID) {
		return listEntryDAO.findAllEntries(todoListID);
	}
}

package com.theitcrowd.todo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.theitcrowd.todo.model.*;

@Repository("todolistdao")
public interface TodoListDAO extends CrudRepository<TodoList, Long> {

	@Modifying
	@Query(value = "INSERT INTO todolists(title, user_id, status) VALUES (?1, ?2, ?3)", nativeQuery = true)
	void insertList(String title, long user_id, String status);

	@Modifying
	@Query(value = "DELETE FROM todolists WHERE todo_list_id = ?1", nativeQuery = true)
	void deleteList(long todo_list_id);

	@Query(value = "SELECT * FROM todolists WHERE user_id = ?1", nativeQuery = true)
	List<TodoList> findAllLists(long id);

	@Modifying
	@Query(value = "UPDATE todolists SET title = ?2 WHERE todo_list_id = ?1", nativeQuery = true)
	void updateListTitle(long todoListID, String title);

	@Modifying
	@Query(value = "UPDATE todolists SET status = ?2 WHERE todo_list_id = ?1", nativeQuery = true)
	void updateListStatus(long todoListID, String status);

}

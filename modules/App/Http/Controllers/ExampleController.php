<?php
/**
 * LARABIZ CMS - Full SPA Laravel CMS
 *
 * @package    larabizcom/larabiz
 * @author     The Anh Dang
 * @link       https://larabiz.com
 */

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Facades\Breadcrumb;
use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Card;
use LarabizCMS\Core\Support\PageBuilder\Elements\DataTable;
use LarabizCMS\Core\Support\PageBuilder\Elements\Form;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Editor;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Select;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Text as TextField;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Textarea;
use LarabizCMS\Core\Support\PageBuilder\Elements\Grids\ContainerGrid;
use LarabizCMS\Core\Support\PageBuilder\Elements\Grids\ItemGrid;
use LarabizCMS\Core\Support\PageBuilder\Page;

class ExampleController extends Controller
{
    public function index()
    {
        Breadcrumb::add('Example');

        $input = TextField::make(['name' => 'textfield', 'label' => 'Textfield'])
            ->placeholder('Placeholder text')
            ->rules(['required']);

        $textarea = Textarea::make(['name' => 'textarea', 'label' => 'Textarea'])
            ->placeholder('Placeholder text')
            ->rows(5)
            ->rules(['required']);
        $select = Select::make(['name' => 'select', 'label' => 'Selector'])
            ->options(['' => '-- Select --', 'option1' => 'Option 1', 'option2' => 'Option 2', 'option3' => 'Option 3'])
            ->rules(['required']);

        $selectAutocomplete = Select::make(['name' => 'select_autocomplete', 'label' => 'Selector Autocomplete'])
            ->autocomplete()
            ->options(['' => '-- Select --', 'option1' => 'Option 1', 'option2' => 'Option 2', 'option3' => 'Option 3'])
            ->rules(['required']);

        $editor = Editor::make(['name' => 'editor', 'label' => 'Editor'])->value('<b>Hello</b>');

        $card = Card::make()->title('Form');
        $form = Form::make();
        $form->add(
            $input,
            $textarea,
            $select,
            $selectAutocomplete,
            $editor,
        );

        $card->add($form);

        $session1 = ItemGrid::make()->add($card);
        $session2 = ItemGrid::make();

        $dataTable = DataTable::make()->withColumns(['Name', 'Email', 'Phone']);
        $dataTable->withRows([['id' => 1, 'name' => 'John', 'email' => 'a0sKk@example.com', 'phone' => '1234567890']]);

        $card = Card::make(['title' => 'Datatable'])->add($dataTable);
        //$session2->add($card);

        // Datatable data from url
        $dataTable = DataTable::make(['columns' => ['Name', 'Email', 'Phone']]);
        $dataTable->dataUrl('https://jsonplaceholder.typicode.com/users')->hasPagination(false);
        $card = Card::make(['title' => 'Datatable from url'])->add($dataTable);
        $session2->add($card);

        return Page::make(['title' => 'Example', 'description' => 'Example'])
            ->add(ContainerGrid::make()->add($session2));
    }
}

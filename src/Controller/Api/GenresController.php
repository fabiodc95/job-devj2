<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Connection;

class GenresController extends AbstractController
{
    #[Route('/api/genres/list')]
    public function list(Connection $db): Response
    {        
        $rows = $db->createQueryBuilder()
            ->select("g.*")
            ->from("genres", "g")
            ->setMaxResults(50)
            ->executeQuery()
            ->fetchAllAssociative();

        return $this->json([
            "genres" => $rows
        ]);
    }
}
